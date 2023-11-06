"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user3.png',
    },
    {/*
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user1.png',
    },
    {
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user3.png',
    },
    {
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        profession: 'Senior UX Designer',
        name: 'Shoo Thar Mien',
        imgSrc: '/assets/mentor/user1.png',
    */}
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                      <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet our <br /> Director.</h2>
                      <div className="flex flex-wrap justify-center items-start"> {/* Added items-start */}
                        <div className="flex items-start"> {/* Added this div */}
                          <img src="./assets/mentor/director.jpg" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
                          <p className="px-2 pl-5"> {/* Removed float classes */}
                            A very warm welcome to the Montessori Careland Family where every child matters. We are very proud of our school and the accomplishments of our students. The dynamic combination of our professional educators, dedicated parents and community members ensure that all students achieve beyond their potential and become lifelong learners to ensure their place as Global citizens in the international communities around the world.

                            We strive to support this environment by building a more inclusive curriculum for all our children to thrive in. We encourage all our students to become independent and creative thinkers.

                            The Montessori Careland uses a holistic and child-centered approach which leads to all decisions, developments, and strategic planning actions for the well-being and success of our students. We are very passionate about providing the best possible learning opportunities and experiences for all children irrespective of their strengths, challenges, or needs.

                            We strive to partner with parents to develop in our students a deep sense of empathy, compassion, and love for their fellow classmates, teachers, community, and the world.

                            All families are welcome at Montessori Careland regardless of their religious, political, and socio-economic positions. We look forward to meeting you and welcoming you as part of the MCland Family.
                          </p>
                        </div>
                      </div>
                    
                   

                    {/*<Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                        <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div>
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>*/}

                </div>
            </div>

        );
    }
}
