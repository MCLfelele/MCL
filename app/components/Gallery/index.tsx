"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

{/*const postData: DataType[] = [
    {
        heading: 'Welcoming Ambience',
        heading2: '',
        name: "Conducive Learning Enviroment",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Excellent Academics',
        heading2: '',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Sports',
        heading2: '',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Recreational Activites',
        heading2: '',
        name: "Colt stelle",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Technology',
        heading2: '',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Great Staff',
        heading2: '',
        name: "Colt stelle",
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]*/}

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 pt-20'>

                    <div className="sm:flex justify-between items-center space-y-4">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0 pb-5">Gallery</h3>
                        
                    </div>

                    <div class="container grid grid-cols-3 gap-2 mx-auto">
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic1.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic2.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic3.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic4.jpeg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic5.jpeg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./assets/gallery/pic6.jpeg"
                                alt="image" />
                        </div>
                    </div>
                    

                    

                    
                </div>
            </div>

        );
    }
}
