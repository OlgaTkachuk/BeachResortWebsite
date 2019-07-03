import React, {Component} from 'react';
import Title from '../Components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free cocktails',
                info: 'libero enim sed faucibus turpis in eu mi bibendum neque'
            },
            {
                icon: <FaBeer/>,
                title: 'strongest beer',
                info: 'libero enim sed faucibus turpis in eu mi bibendum neque'
            },
            {
                icon: <FaHiking/>,
                title: 'best hiking',
                info: 'libero enim sed faucibus turpis in eu mi bibendum neque'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'free shuttle',
                info: 'libero enim sed faucibus turpis in eu mi bibendum neque'
            },


        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='Services'/>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Services;