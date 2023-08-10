import React, { useEffect, useState } from 'react'
import "./totalinspection.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const TotalInspection = () => {

    let [allinspection, setAllimspection] = useState([])
    let move = useNavigate()
    useEffect(() => {

        axios.get('/allinspections')
            .then((res) => {
                setAllimspection(res.data)
            })
            .catch(error => {

            });

    }, []);

    console.log(allinspection)

    return <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                    <h1 style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Total Inspections </h1>
                </div>
                {
                    allinspection.map((data) => {
                        return <div className='row px-5 mb-4 done-inspections ' onClick={() => {
                            move(`/single/${data._id}`)
                        }}>
                            <div className="col-lg-3 col-sm-5 py-3 px-4 recent">
                                <div><p className='text-center' style={{ fontSize: "30px", fontWeight: "700", color: "rgb(2, 2, 94)", }}>Inspection Done</p></div>
                                <div><p>Client Name : {data.clientName}</p></div>
                                <div><p>Client Number : {data.clientNumber}</p></div>
                                <div><p>Vehicle Make :  {data.vehicleMake}</p></div>
                                <div><p>Vehicle Model :</p></div>
                                <div><p>Location :</p></div>
                                <div><p>Inspected By :</p></div>
                                <div><p>Inspector Number :</p></div>
                                <div><p>Date :</p></div>
                            </div>
                        </div>

                    })
                }

            </div>

        </div>
    </>
}
