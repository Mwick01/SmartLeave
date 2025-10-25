/* eslint-disable prettier/prettier */
import LogoConmponent from "../components/Logo";
import LogoutIcon from '@mui/icons-material/Logout';
function DashBoardPage(){

    const backonClick=(e)=>{
        e.preventDefault();
        window.history.back();
    }
    return(
        <>

        <div className="flex flex-col  items-center h-screen bg-[url(../assets/images/background.jpg)] bg-cover bg-center   ">
        <div className="z-10 h-15 w-full bg-[#D9D9D9] shadow-md flex items-center justify-end px-10">  
            <p className="px-10">Last sync: 2 days ago</p> 
            <button className="text-white rounded-full bg-[#70A9A1] w-30 h-10  ">Sync</button>
        </div>
        <div className="absolute inset-0 bg-black/50"></div> 


        <div className="z-10 flex w-full justify-end px-10">
            <button onClick={backonClick} className="text-white  rounded-full bg-[#70A9A1] w-35 h-12 mt-8 hover:bg-red-800">
           <LogoutIcon /> Logout
        </button>
        </div>
       <LogoConmponent />
       <div className=" w-full h-96   lg:mt-30 z-10 mt-20 grid grid-flow-col grid-rows-2 gap-10 p-20">

        <button className="border border-black bg-[#CFE0C3]/75 rounded-xl flex justify-center items-center font-semibold text-lg cursor-pointer hover:bg-[#CFE0C3] ">Teacher Details</button>
        <button className="border border-black  bg-[#CFE0C3]/75  rounded-xl flex justify-center items-center font-semibold text-lg cursor-pointer hover:bg-[#CFE0C3]">Add Leave</button>
        <button className="border border-black  bg-[#CFE0C3]/75 rounded-xl flex justify-center items-center font-semibold text-lg cursor-pointer hover:bg-[#CFE0C3]">Time Table</button>
         <button className="border border-black  bg-[#CFE0C3]/75 rounded-xl flex justify-center items-center font-semibold text-lg cursor-pointer hover:bg-[#CFE0C3]">About</button>
          <button className="border border-black  bg-[#70A9A1]/75 row-span-2 rounded-xl flex justify-center items-center text-white font-semibold text-lg cursor-pointer hover:bg-[#70A9A1]">Leave Details</button>
        </div> 
        </div>
       
        </>
    );
}
export default DashBoardPage;