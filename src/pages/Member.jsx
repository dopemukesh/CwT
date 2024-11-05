import projectData from '../api/projectData.json'
import repoIcon from '/public/icons/file-repoIcon.svg'

const Members = () => {
    return (
        <>
            {/* <h1 className='font-medium text-yellow-500 text-xl text-center my-16'>This cards are coming from the inbuilt api.</h1> */}

            <div className='w-screen flex flex-col items-center justify-evenly bg-slate-100 dark:bg-slate-700/20 h-[500px]'>
                <div className='flex justify-center'>
                    <h1 className="text-3xl text-center font-extrabold text-slate-800 dark:text-slate-100 h-fit w-fit">Our Projects</h1>
                </div>

                <div className='flex container px-4 md:px-8 lg:px-32 gap-4 w-screen overflow-x-scroll snap-x snap-mandatory  items-center'>
                    {projectData.map((CurElem) => {
                        return (
                            <div key={CurElem.projName} className='bg-white dark:bg-slate-800 my-4 drop-shadow-md border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl p-4 flex flex-col min-w-72 max-w-80 snap-center h-fit'>

                                <img src={CurElem.memberImage} alt={CurElem.memberName} width="44px" className='rounded-xl bg-slate-700' />

                                <div id='projectDetail' className='mt-4'>
                                    <p className='text-[18px] font-bold'>{CurElem.projName}</p>
                                    <p className='text-[12px] text-slate-500'><a href={"https://www."+CurElem.prodivnk}>{CurElem.projLink}</a></p>
                                </div>

                                <p className='my-4 text-slate-700 dark:text-slate-500 font-medium text-sm leading-6 text-wrap '>{CurElem.projDescription}</p>

                                <div id='memberInfo' className='flex justify-between items-center mb-2'>
                                    <p className='font-semibold'>{CurElem.memberName}</p>
                                    <p className='text-[10px] font-medium text-slate-500  py-1 px-2 bg-slate-200 dark:bg-slate-700/50 rounded-md'>{CurElem.memberTag}</p>
                                </div>
                                <i className='bg-slate-200 dark:bg-slate-700 h-[1px] mb-2'></i>
                                <a href={CurElem.repoLink} className='flex gap-2 text-slate-700 dark:text-slate-500 bg-slate-200 dark:bg-slate-700/50 w-fit py-1 px-2 rounded-md'><img src={repoIcon} alt="repoIcon" width="16px" />Repo</a>
                                {/* <p>{CurElem.address}</p> */}

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Members