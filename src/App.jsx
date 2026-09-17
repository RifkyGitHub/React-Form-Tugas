import { useState } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      no_telp: "",
      paket: "",
      sesi: "",
      isAgreed: false,
    },
  });

  const getError = (field) => errors[field];

  const onNext = () => {
    setCurrentStep((step) => step + 1);
  };

  const onPrev = () => {
    setCurrentStep((step) => step - 1);
  };

  const onSubmit = (data) => {
    console.log("Data pendaftaran:", data);
    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-800">
            Form Pendaftaran Event
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Lengkapi data pendaftaran Anda.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <StepOne
              register={register}
              errors={errors}
              trigger={trigger}
              setFocus={setFocus}
              getError={getError}
              onNext={onNext}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              register={register}
              errors={errors}
              trigger={trigger}
              setFocus={setFocus}
              getError={getError}
              onNext={onNext}
              onPrev={onPrev}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              register={register}
              errors={errors}
              getValues={getValues}
              onPrev={onPrev}
            />
          )}

          {currentStep === 3 && (
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-green-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-green-900"
            >
              Submit Pendaftaran
            </button>
          )}
        </form>
      </div>
    </main>
  );
}

export default App;
