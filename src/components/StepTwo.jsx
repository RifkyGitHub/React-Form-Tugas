function StepTwo({
  register,
  errors,
  trigger,
  setFocus,
  getError,
  onNext,
  onPrev,
}) {
  const nextStep = async () => {
    const isValid = await trigger(["paket", "sesi"]);

    if (isValid) {
      onNext();
    } else {
      if (getError("paket")) {
        setFocus("paket");
      } else if (getError("sesi")) {
        setFocus("sesi");
      }
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-green-800">
          Langkah 2: Pilihan Kursus & Jadwal
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Pilih paket dan sesi belajar yang tersedia.
        </p>
      </div>

      <div>
        <label
          htmlFor="paket"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Pilih Paket Belajar
        </label>

        <select
          {...register("paket", {
            required: "Silakan pilih salah satu paket belajar.",
          })}
          id="paket"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
            errors.paket
              ? "border-red-400"
              : "border-gray-200 focus:border-green-700"
          }`}
        >
          <option value="">-- Pilih Paket --</option>
          <option value="frontend">Frontend Developer (Rp 500.000)</option>
          <option value="backend">Backend Developer (Rp 500.000)</option>
          <option value="fullstack">Fullstack Developer (Rp 900.000)</option>
        </select>

        {errors.paket && (
          <p className="mt-1.5 text-sm text-red-500">{errors.paket.message}</p>
        )}
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-gray-700">
          Pilih Sesi Belajar
        </p>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-green-700 hover:bg-gray-50">
            <input
              {...register("sesi", {
                required: "Pilih salah satu sesi belajar.",
              })}
              type="radio"
              value="pagi"
              className="accent-green-800"
            />
            <span className="text-sm text-gray-700">
              Sesi Pagi (09.00 - 12.00 WIB)
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-green-700 hover:bg-gray-50">
            <input
              {...register("sesi", {
                required: "Pilih salah satu sesi belajar.",
              })}
              type="radio"
              value="sore"
              className="accent-green-800"
            />
            <span className="text-sm text-gray-700">
              Sesi Sore (16.00 - 19.00 WIB)
            </span>
          </label>
        </div>

        {errors.sesi && (
          <p className="mt-1.5 text-sm text-red-500">{errors.sesi.message}</p>
        )}
      </div>

      <div className="flex justify-between pt-3">
        <button
          type="button"
          onClick={onPrev}
          className="rounded-xl border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
        >
          Kembali
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
        >
          Lanjut ke Step 3
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
