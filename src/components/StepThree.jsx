function StepThree({ register, errors, getValues, onPrev }) {
  const values = getValues();

  const namaPaket = {
    frontend: "Frontend Developer (Rp 500.000)",
    backend: "Backend Developer (Rp 500.000)",
    fullstack: "Fullstack Developer (Rp 900.000)",
  };

  const namaSesi = {
    pagi: "Sesi Pagi (09.00 - 12.00 WIB)",
    sore: "Sesi Sore (16.00 - 19.00 WIB)",
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-green-800">
          Langkah 3: Konfirmasi & Persetujuan
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Periksa kembali data pendaftaran Anda.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm">
        <p className="font-medium text-gray-800">Ringkasan Pendaftaran</p>

        <div className="space-y-2 text-gray-600">
          <p>
            <strong className="text-gray-800">Nama:</strong> {values.fullName}
          </p>

          <p>
            <strong className="text-gray-800">Email:</strong> {values.email}
          </p>

          <p>
            <strong className="text-gray-800">No. Telepon:</strong>{" "}
            {values.no_telp}
          </p>

          <p>
            <strong className="text-gray-800">Paket:</strong>{" "}
            {namaPaket[values.paket]}
          </p>

          <p>
            <strong className="text-gray-800">Sesi:</strong>{" "}
            {namaSesi[values.sesi]}
          </p>
        </div>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            {...register("isAgreed", {
              required:
                "Anda harus menyetujui syarat dan ketentuan yang berlaku.",
            })}
            type="checkbox"
            className="mt-1 accent-green-800"
          />

          <span className="text-sm text-gray-700">
            Saya menyetujui syarat dan ketentuan yang berlaku.
          </span>
        </label>

        {errors.isAgreed && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.isAgreed.message}
          </p>
        )}
      </div>

      <div className="flex justify-start pt-3">
        <button
          type="button"
          onClick={onPrev}
          className="rounded-xl border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}

export default StepThree;
