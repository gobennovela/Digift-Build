import { FilterIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import CollectionItem from "../abstract/CollectionItem";
import totalCollectionData from '../../contents/content.json';

function CollectionSection() {

    const [collection, setCollection] = useState([]);
    const [category, setCategory] = useState('Popular')

    useEffect(() => {
        async function fetchInitialData() {
            const data = await totalCollectionData;
            setCollection(data.content);
        }
        fetchInitialData()
    }, [])

    const setItems = async (category) => {
        try {
            const data = await totalCollectionData;
            let actualContent = category === 'Popular' ? data.content : data.content.filter(item => item.category === category);
            setCollection(actualContent);
            setCategory(category)
            console.log(actualContent)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="w-[100%] lg:w-[95%] mx-auto mt-[6em] lg:mt-[5vh]">
            <div className="w-[100%] lg:w-[90%] mx-auto md:border-t-[1.5px] border-digiftBorder py-[2vh] lg:py-[7vh] dark:border-headerToggleDark/25">
                <div className="w-[100%] mx-auto">
                    <h3 className="text-[1.25em] lg:text-[1.5em] ml-[8vw] lg:ml-[0vw] font-semibold text-left tracking leading-auto text-darkText tracking-tighter dark:text-white">All collections</h3>
                    <ScrollContainer className='w-[100%]'>
                        <div className="mt-[4vh] w-[90%] flex flex-col lg:flex-row items-start lg:items-center justify-start">
                            <div className="grid grid-cols-7 w-[260vw] md:w-[120vw] lg:grid-cols-6 justify-start gap-[1em] items-center ml-[1em] lg:w-auto">
                                <h4 className='filterTag leading-[2] font-medium w-auto text-prevalentText dark:text-white lg:border-r-[2px] border-prevalentText/20 flex justify-center items-center flex-row'><FilterIcon className="w-[16px] mr-[.5em] text-prevalentTextSecondary dark:text-prevalentTextSecondary/50" /> Filter</h4>
                                <button className={`${category === 'Popular' ? 'filterButtonActive' : 'filterButton'}`} onClick={() => setItems("Popular")} >All</button>
                                <button className={`${category === 'Ecommerce' ? 'filterButtonActive' : 'filterButton'}`} onClick={() => setItems("Ecommerce")} >Ecommerce</button>
                                <button className={`${category === 'Electricity' ? 'filterButtonActive' : 'filterButton'}`} onClick={() => setItems("Electricity")} >Electricity</button>
                                <button className={`${category === 'Airtime' ? 'filterButtonActive' : 'filterButton'}`} onClick={() => setItems("Airtime")} >Airtime</button>
                                <button className={`${category === 'Television' ? 'filterButtonActive' : 'filterButton'}`} onClick={() => setItems("Television")} >Television</button>
                            </div>
                        </div>
                    </ScrollContainer>
                </div>
                <div className="mt-[5em]">
                    <CollectionItem collection={collection} />
                </div>
            </div>
        </section>
    );
}

export default CollectionSection;
