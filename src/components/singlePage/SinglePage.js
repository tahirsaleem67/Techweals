import React, { useEffect, useState } from 'react'
import './singlePage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const SinglePage = () => {

    let [single ,setSingle] = useState({})

    let params = useParams()

    useEffect(() => {
        if (params.id) {
            axios.get('/single-inspection?id=' + params.id)
                .then((res) => {
                    setSingle(res.data)
                })
                .catch(error => {

                });
        }
    }, [params.id]);







    return (
        <div className='container-fluid px-4'>
            <div className="row single-page">
                <di className="col-lg-6   single-page-text">
                    <h1>INSPECTACAR</h1>

                    <p>INSPECtION By : Sharjeel GUjjar</p>
                </di>
                <di className="col-lg-6 d-flex justify-content-center align-items-center single-page-text1">
                    <h1>Inspection karwao <br />bafikr hojao</h1>
                    <h2>inspection report</h2>
                </di>
            </div>
            <div className="row">
                <h2 className='single-h'>preliminary information</h2>
                <hr className='single-hr' />
                <div className="col-lg-4 d-flex justify-content-between ">
                    <div>

                        <p className='px-3 '>Client Name</p>
                        <p className='px-3 '>Client Number</p>
                        <p className='px-3'>Vehicle Make</p>
                        <p className='px-3'>Vehicle Model</p>
                        <p className='px-3'>Vehicle Variant</p>
                        <p className='px-3'>Model Year</p>
                        <p className='px-3'>Transmission</p>
                        <p className='px-3'>Engine Capacity</p>
                        <p className='px-3'>Fuel Type</p>
                        <p className='px-3'>Body Color</p>
                        <p className='px-3'>Mileage</p>
                        <p className='px-3'>Registration Number</p>
                        <p className='px-3'>Registered City</p>
                        <p className='px-3'>Chassis Number</p>
                        <p className='px-3'>Engine Number</p>
                        <p className='px-3'>Inspection Location</p>
                        <p className='px-3'>Inspection Date</p>

                    </div>
                    <div>

                        <p>{single.clientName}</p>
                        <p>{single.clientNumber}</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center   mb-3 px-3   " >
                    <img src="car1.jpg" className='rounded' width={'100%'} height={'250px'} alt="" />
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center   mb-3 px-3   " >
                    <img src="car2.jpg" className='rounded' width={'100%'} height={'250px'} alt="" />
                </div>

            </div>


            <div className="row ">
                <h2 className='single-h'>Description</h2>
                <hr className='single-hr' />
                <div className="col-lg-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea aspernatur odit sit, sunt quod neque eligendi ex corrupti reprehenderit quis eum quos, praesentium molestias dolorum iusto ipsam dolore porro?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime vel recusandae voluptatibus perspiciatis quam blanditiis fuga debitis temporibus asperiores, illo soluta atque iste sapiente deleniti quos laboriosam commodi quidem enim.
                    </p>
                </div>
            </div>


            <div className="row">
                <h2 className='single-h'>car schematic</h2>
                <hr className='single-hr' />
                <div className="col-lg-6">
                    <img src="car-modal.PNG" alt="" />
                </div>
                <div className="col-lg-6">
                    <img src="car-gragh.PNG" alt="" />
                </div>
            </div>


            <div className="row">
                <h2 className='single-h'>accedental checklist</h2>
                <hr className='single-hr' />
                <div className="col-lg-4 d-flex justify-content-between ">
                    <div>

                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>

                    </div>
                    <div className='px-3' style={{ backgroundColor: '#EAF1FF' }}>

                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center   mb-3 px-3   " >
                    <img src="car3.jpg" className='rounded' width={'100%'} height={'250px'} alt="" /> <br />
                    <img src="car4.jpg" className='rounded' width={'100%'} height={'250px'} alt="" />
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center   mb-3 px-3   " >
                    <img src="car4.jpg" className='rounded' width={'100%'} height={'250px'} alt="" /> <br />
                    <img src="car3.jpg" className='rounded' width={'100%'} height={'250px'} alt="" />
                </div>

            </div>




            <div className="row">
                <h2 className='single-h'>mechanical function</h2>
                <hr className='single-hr' />
                <div className="col-lg-4 d-flex justify-content-between ">
                    <div>

                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>
                        <p className='px-3'>Clinet Name</p>


                    </div>
                    <div className='px-3' style={{ backgroundColor: '#EAF1FF' }}>

                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>
                        <p>Tahir Saleem</p>

                    </div>
                </div>
                <div className="col-lg-8 d-flex flex-column justify-content-center   mb-3 px-3   " >
                    <img src="car1.jpg" className='rounded' width={'60%'} height={'250px'} alt="" /> <br />

                </div>

            </div>


        </div>
    )
}

export default SinglePage
