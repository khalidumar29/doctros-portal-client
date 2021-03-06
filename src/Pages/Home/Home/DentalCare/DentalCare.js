import React from "react";
import dental from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../Shared/Navbar/PrimaryButton/PrimaryButton";
const DentalCare = () => {
  return (
    <div className='hero min-h-screen lg:mb-10'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={dental} className='max-w-sm rounded-lg shadow-2xl' alt='' />
        <div className='lg:px-[150px]'>
          <h1 className='text-5xl font-bold text-accent'>
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className='py-6'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>{" "}
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
