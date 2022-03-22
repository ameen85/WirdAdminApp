import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Loader from "../Loader";
import Students from "../Students/Students";
import Groups from "../Groups/Groups";
import Admins from "../Admins/Admins";
import Standards from "../Standards/Standards";
import StudentsPoints from "../studentsPoints/StudentsPoints";
import Competition from "../Competition/competition";
import ReviewOtherPoints from "../ReviewOtherPoints/ReviewOtherPoints";
import {useAdminContext} from "../../contexts/AdminContext";
import AppLayout from "../AppLayout/AppLayout";
export default function AppBrowserRouter(){

    const context = useAdminContext();
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={ <AppLayout color="#FFF;" children={<Home/>}/>} />
                <Route exact path="/Competition" element={<AppLayout color="#2980b9;" children={<Competition/>}/>} />
                <Route exact path="/loading" element={<Loader/>} />
                <Route exact path= "/Students" element= {<AppLayout color="#2980b9;" children={<Students/>}/>}  />
                <Route exact path= "/Groups" element= {<AppLayout color="#2980b9;" children={<Groups/>} /> }  />
                { Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin &&
                    <Route exact path= "/Admins" element={ <AppLayout color="#2980b9;" children={<Admins/>}/>}  />
                }
                <Route exact path= "/Standards" element= {<AppLayout color="#2980b9;" children={<Standards/>}/>}/>
                <Route exact path= "/Review-other-points" element= {<AppLayout color="#2980b9;" children={<ReviewOtherPoints/>}/>}/>
                <Route exact path= "/StudentsPoints" element= { <AppLayout color="#2980b9;" children={<StudentsPoints/>}/>} />

            </Routes>
        </BrowserRouter>
    );
}