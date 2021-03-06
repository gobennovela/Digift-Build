import Link from 'next/link';
import React from 'react';



function CollectionItem({ collection }) {
  return (
    <section className="my-[3vh] lg:my-[7vh]">
      <div className="grid grid-cols-1 lg:gap-[2em] items-center justify-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-[1em]">

        {collection.map((item) => (
          <>
            <div key={item.id} className="border-[4px] lg:border-[8px] mx-auto border-lightBgColor dark:border-headerToggleDark/20 rounded-[1em] w-[83.47222222222222vw] md:w-[32vw] lg:w-[25vw] px-[12px] pt-[12px] bg-transparent overflow-hidden">
              <div className="w-[100%] h-[82.833333333333332vw]  bg-lightBgColor dark:bg-headerToggleDark/25 md:h-[25.8333333332vw] lg:h-[21.933333333333332vw] flex flex-col items-center justify-center rounded-[8px] border-[1px] dark:border-headerToggleDark/50 border-digiftBorder object-cover lg:object-contain overflow-hidden">
                <img src={`${item.imageUrl}`} alt="" loading="lazy" className="w-[100%] h-[100%]" />
              </div>
              <div className="my-[1em] p-[0.5em] flex flex-col items-start justify-between text-ellipsis">
                <h3 className="text-[1em] font-semibold pb-[1.5vh] border-b-[1px] border-digiftGray dark:border-headerToggleDark/50 w-[100%] mb-[1.5vh]">{item.name}</h3>
                <p className="text-[14px] font-medium max-w-[95%] text-ellipsis overflow-hidden truncate text-prevalentText dark:text-gray-300 leading-[2]">{item.description}</p>
                <Link href="/">
                  <a className="w-[100%] mt-[1.25em] py-[1.25em] px-[1em] dark:hover:bg-digiftBrandBlue/80 dark:bg-digiftBrandBlue hover:bg-digiftBrandBlue hover:text-white transition duration-400 dark:text-white text-digiftBrandBlue font-medium bg-lightBgColor rounded-full flex flex-col items-center justify-center text-[14px]">View details</a>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default CollectionItem;
