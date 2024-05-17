'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import FormOne from '@/admin-components/seller/steps/FormOne'
import FormTwo from '@/admin-components/seller/steps/FormTwo'
import FormThree from '@/admin-components/seller/steps/FormThree'
import Final from '@/admin-components/seller/steps/Final'

const Step = () => {
   const params = useSearchParams()
   const step = params.get('step') || 1

   const [currentStep, setCurrentStep] = useState(1);

   const handleNext = () => {
      setCurrentStep(currentStep + 1);
   };

   const handleBack = () => {
      setCurrentStep(currentStep - 1);
   };

   const renderStep = () => {
      switch (currentStep) {
         case 1:
            return <FormOne onNext={handleNext} />
         // return <Step1 onNext={handleNext} />;
         case 2:
            return <FormTwo onPrev={handleBack} onNext={handleNext} />
         // return <Step2 onBack={handleBack} onNext={handleNext} />;
         case 3:
            return <FormThree onPrev={handleBack} onNext={handleNext} />
         // return <Step3 onBack={handleBack} />;
         case 4:
            return <Final onPrev={handleBack} />
         default:
            return null;
      }
   };

   return (
      <div>
         {renderStep()}
      </div>
   )
}

export default Step