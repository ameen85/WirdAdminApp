import React, {useEffect, useState} from 'react'
import {
    DivMultiselect,
    DivTxtField,
    DropdownDiv,
    DropdownDivSelect,
    FormInput,
    Form,
    InputSubmit,
    Span, AnnouncementsFormInput, RemoveBtn, AddBtn
} from "../Groups.styles";
import Multiselect from "multiselect-react-dropdown";
import {DropdownList, DropdownListItem} from "../../Admins/EditAdminForm/EditAdminForm.styles";
import {DivPass} from "../../Admins/Admins.styles";
import {updateGroup} from "../../../services/groupsServices";
import {useAdminContext} from "../../../contexts/AdminContext";

export default function EditGroupForm(props) {

    const [selectedStudents, setSelectedStudents] = useState([]);
    const [currentSelectedStudents, setCurrentSelectedStudents] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedAdminUserName, setSelectedAdminUserName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [isValidGroupName, setValidGroupName] = useState(true);
    const [announcements, setAnnouncements] = useState([""]);
    const [isSemiColonExists, setSemiColonExists] = useState(false);
    const [messages, setMessages] = useState([]);
    const context = useAdminContext();

    useEffect(()=>{
        setMessages([]);
    },[selectedStudents, selectedAdminUserName, groupName, announcements]);


    const handleSelectedGroupChange = (e)=>{
        let group = props.studentsGroups.filter(studentsGroup => studentsGroup.id === Number(e.target.value))[0];
        if(group){
            setSelectedAdminUserName(group.admin);
            setGroupName(group.name);
            let announcementsArray = group.announcements.split(";").filter(item => item.trim().length > 0);
            setAnnouncements(announcementsArray.length > 0 ? announcementsArray: [""]);
            if(group.group_students && group.group_students.length > 0){
                setCurrentSelectedStudents(props.students.filter(student => group.group_students.includes(student.username)));
            }else{
                setCurrentSelectedStudents([]);
            }
            setSelectedStudents(group.group_students);
            setSelectedGroup(group);
        }else{
            setSelectedAdminUserName("");
            setGroupName("");
            setAnnouncements([""]);
            setCurrentSelectedStudents([]);
            setSelectedStudents([]);
            setSelectedGroup(null);
        }
    }

    const handleUpdateSelectedStudentsChange = (e) => {
        let selectedStudents = [];
        for (let i = 0; i < e.length; i++) {
            selectedStudents.push(e[i].username);
        }
        setSelectedStudents(selectedStudents);
    };

    const handleAdminSelectChange = (e) => {
        setSelectedAdminUserName(e.target.value);
    };

    const handleGroupNameChange = (e) => {
        if(e.target.value > 30){
            setValidGroupName(false);
        }else{
            setValidGroupName(true);
        }
        setGroupName(e.target.value);
    };


    const handleEditGroupSubmit = (e) => {
        e.preventDefault();

        if(selectedGroup == null){
            setMessages(['يجب عليك إختيار مجموعة']);
            return;
        }

        if(selectedAdminUserName ===""){
            setMessages(['يجب عليك إختيار مسؤول لهذه المجموعة']);
            return;
        }

        let valid = true;
        announcements.forEach(announcement =>{
            if(announcement.includes(';')){
                valid = false;
            }
        });

        if(!valid){
            setSemiColonExists(true);
            return;
        }else{
            setSemiColonExists(false);
        }

        updateGroup(selectedGroup.id,
            {
                'admin': selectedAdminUserName,
                'name': groupName,
                'group_students': selectedStudents,
                'announcements': announcements.filter(announcement => announcement.trim().length > 0).join(";")
            },
            (res) => {
                if (res && res.status === 200) {
                    let updatedGroup = props.studentsGroups.filter( group => group.id === Number(selectedGroup.id))[0];
                    updatedGroup.admin = selectedAdminUserName;
                    updatedGroup.name = groupName;
                    updatedGroup.group_students = selectedStudents;
                    updatedGroup.announcements = announcements;
                    props.setGroups([...props.studentsGroups.filter( group => group.id !== Number(selectedGroup.id)), updatedGroup]);
                    setMessages(["تم تعديل المجموعة بنجاح"]);
                }
            },
            (err) => {
                let errMessages = [];
                errMessages.push(["لم يتم تعديل المجموعة"]);
                if (err.response.data) {
                    let obj = err.response.data;
                    Object.keys(obj).forEach(e => {
                            errMessages.push(obj[e]);
                        }
                    )
                }
                setMessages(errMessages);
            }
        );

    };

    const handleAnnouncementsChange = (e, index)=>{
        let notesArray = [...announcements];
        notesArray.splice(index, 1, e.target.value);
        setAnnouncements(notesArray);
    }

    const handleAddBtnChange = ()=>{
        setAnnouncements([...announcements, ""]);
    }

    const handleRemoveBtnChange = (index)=>{
        let notesArray = [...announcements];
        notesArray.splice(index, 1);
        setAnnouncements(notesArray);
    }

    return (
        <Form onSubmit={handleEditGroupSubmit}>

            { props.studentsGroups && props.studentsGroups.length > 0 &&
                <DropdownDiv className="DropdownDiv" onChange={handleSelectedGroupChange}>
                    <DropdownList className="DropdownList_groups" >
                        <DropdownListItem>اختر المجموعة</DropdownListItem>
                        {
                            props.studentsGroups.map((group, index) => (
                                <DropdownListItem key={index} value={group.id}>{group.name}</DropdownListItem>
                            ))
                        }
                    </DropdownList>
                </DropdownDiv>

            }
            { Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin && props.students && props.students.length > 0 &&
                <DropdownDiv className='DropdownDiv'>
                    <DropdownDivSelect>
                        <Span>أسماء طلبة يكمن اضافتهم</Span>
                        <DivMultiselect>
                            <Multiselect
                                onSelect={handleUpdateSelectedStudentsChange}
                                onRemove={handleUpdateSelectedStudentsChange}
                                selectedValues={currentSelectedStudents === [] ? [] : currentSelectedStudents}
                                options={props.students}
                                displayValue="full_name"
                                placeholder=""
                                popupHeight='1rem'
                                popupwidth='5rem'
                            />
                        </DivMultiselect>
                    </DropdownDivSelect>

                </DropdownDiv>
            }

            { props.admins && props.admins.length > 0 &&

                    <DropdownDiv className="DropdownDiv">
                        <DropdownList className="DropdownList_groups" value={selectedAdminUserName !== "" ? selectedAdminUserName : ""} onChange={handleAdminSelectChange}>
                            <DropdownListItem key={0} value="">اختر المسؤول</DropdownListItem>
                            {
                                props.admins.map((admin, index) => (
                                    <DropdownListItem key={index+1} value={admin.username}>{admin.first_name} {admin.last_name}</DropdownListItem>
                                ))
                            }
                        </DropdownList>
                    </DropdownDiv>
            }

            <DivTxtField>
                <Span/>
                <FormInput placeholder='ادخل اسم المجموعة الجديدة' value={groupName !== "" ?  groupName : ""} onChange={handleGroupNameChange} type="text" required/>
            </DivTxtField>
            {!isValidGroupName &&
                <DivPass>يجب أن يكون طول اسم المجموعة أقل أو يساوي 30 حرف</DivPass>

            }

            {
                announcements?.map((inputItem, index) => {
                    return (

                        <DivTxtField style={{width: '100%'}}>
                            <Span/>
                            <AnnouncementsFormInput placeholder='الإعلان' key={index} value={inputItem}
                                                    onChange={(e) => handleAnnouncementsChange(e, index)} type="text"/>
                            {announcements.length > 1 &&
                                <RemoveBtn onClick={() => handleRemoveBtnChange(index)}>-</RemoveBtn>}
                            {index === announcements.length - 1 && <AddBtn onClick={handleAddBtnChange}>+</AddBtn>}
                        </DivTxtField>)
                })
            }
            { isSemiColonExists &&
                <DivPass>الإعلان يجب أن لا يحتوي على ;</DivPass>
            }
            {messages.length > 0 &&
                messages.map((message, index)=>{
                    return <DivPass key={index}>{message}</DivPass>
                })
            }
            <InputSubmit type="submit" value='login'>تعديل المجموعة</InputSubmit>

        </Form>
    );
}