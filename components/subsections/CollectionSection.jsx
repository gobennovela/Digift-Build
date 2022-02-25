import { FilterIcon } from '@heroicons/react/outline';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import CollectionItem from "../abstract/CollectionItem";

function CollectionSection() {
    return (
        <section className="w-[95%] mx-auto mt-[0vh] lg:mt-[5vh]">
            <div className="w-[95%] lg:w-[90%] mx-auto border-t-[1.5px] border-digiftBorder py-[2vh] lg:py-[7vh] dark:border-headerToggleDark/25">
                <div>
                    <h3 className="text-[1.5em] font-semibold text-left tracking leading-auto text-darkText dark:text-white">All collections</h3>
                    <ScrollContainer className='w-[100%]'>
                        <div className="mt-[4vh] w-[90%] flex flex-col lg:flex-row items-start lg:items-center justify-start">
                            <div className="grid grid-cols-7 w-[260vw] md:w-auto lg:grid-cols-6 justify-start gap-[1em] items-center ml-[1em] lg:w-auto">
                                <h4 className='filterTag leading-[2] font-medium w-auto text-prevalentText dark:text-white lg:border-r-[2px] border-prevalentText/20 flex justify-center items-center flex-row'><FilterIcon className="w-[16px] mr-[.5em] text-prevalentTextSecondary dark:text-prevalentTextSecondary/50" /> Filter</h4>
                                <button className="filterButtonActive">Popular</button>
                                <button className="filterButton">Ecommerce</button>
                                <button className="filterButton">Electricity</button>
                                <button className="filterButton">Airtime</button>
                                <button className="filterButton">Television</button>
                            </div>
                        </div>
                    </ScrollContainer>
                </div>
                <div>
                    <CollectionItem />
                </div>
            </div>
        </section>
    );
}

export default CollectionSection;
