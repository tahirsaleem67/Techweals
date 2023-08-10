import React, { useEffect, useState } from 'react';
import { NewInspection } from './NewInspection';
import { FaUsers } from "react-icons/fa";
import { FcInspection, FcKindle } from "react-icons/fc";
import { TotalInspection } from "./TotalInspection"
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./dashboard.css";

export const Dashboard = () => {

    let [totalapp, setTotalapp] = useState()
    let [totalins, setTotalins] = useState()

    useEffect(() => {
        axios.get('/total-appointments').then((res) => {
            setTotalapp(res.data)
        })

        axios.get('/total-inspections').then((res) => {
            setTotalins(res.data)
        })

    }, [])


    let data = [
        { title: "Total Users", icon: <FaUsers />, desc: '50+' },
        { title: "New Inspection", icon: <FcKindle />, desc: totalapp + '+' },
        { title: "Inspections List", icon: <FcInspection />, desc: totalins + '+' }
    ]


    const [recentClicked, setRecentClicked] = useState(false);
    return (
        <>
            <div className='container-fluid'>
                <div className='row pt-2 pb-5 px-3' style={{ backgroundColor: "rgb(2, 2, 94)", color: "white", borderRadius: "20px" }}>
                    <div className='col-lg-12 col-sm-12 py-4'>
                        <h1>Dashboard </h1>
                    </div>
                    {data.map((data) => {
                        return <div className='col-lg-4 col-sm-5 p-3' >
                            <div className='dash_card'>
                                <div className='dash_icon' style={{ fontSize: "80px" }}>
                                    {data.icon}
                                </div>
                                <div className='dash_detail' style={{ fontSize: "30px" }}>
                                    <div className=''>
                                        <p className=''>{data.title}</p>
                                    </div>
                                    <div className='d-flex justify-content-end px-3'>
                                        <p>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>

                <div className='col-lg-12 col-sm-12'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <NewInspection />

                    </div>
                </div>

                <div className='col-lg-12 col-sm-12'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <TotalInspection />
                    </div>
                </div>

            </div>
        </>
    );
};
