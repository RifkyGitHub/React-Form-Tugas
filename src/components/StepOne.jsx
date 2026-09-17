function StepOne({ register, errors, trigger, setFocus, getError, onNext }) {
  const nextStep = async () => {
    const isValid = await trigger(["fullName", "email", "no_telp"]);

    if (isValid) {
      onNext();
    } else {
      if (getError("fullName")) {
        setFocus("fullName");
      } else if (getError("email")) {
        setFocus("email");
      } else if (getError("no_telp")) {
        setFocus("no_telp");
      }
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-green-800">
          Langkah 1: Informasi Pribadi
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Masukkan data pribadi Anda dengan benar.
        </p>
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Nama Lengkap
        </label>

        <input
          {...register("fullName", {
            required: "Nama lengkap wajib diisi.",
            minLength: {
              value: 3,
              message: "Nama lengkap minimal 3 karakter.",
            },
          })}
          id="fullName"
          type="text"
          placeholder="Masukkan nama lengkap"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
            errors.fullName
              ? "border-red-400"
              : "border-gray-200 focus:border-green-700"
          }`}
        />

        {errors.fullName && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Aktif
        </label>

        <input
          {...register("email", {
            required: "Email wajib diisi.",
            pattern: {
              value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email tidak valid.",
            },
          })}
          id="email"
          type="email"
          placeholder="Masukkan email"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
            errors.email
              ? "border-red-400"
              : "border-gray-200 focus:border-green-700"
          }`}
        />

        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="no_telp"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Nomor WhatsApp
        </label>

        <input
          {...register("no_telp", {
            required: "Nomor WhatsApp wajib diisi.",
            pattern: {
              value:/^[0-9]{10,13}$/,
              message: "Nomor WhatsApp harus berupa angka dan bernilai 10-13 digit.",
            },
          })}
          id="no_telp"
          type="tel"
          placeholder="Masukkan nomor WhatsApp"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
            errors.no_telp
              ? "border-red-400"
              : "border-gray-200 focus:border-green-700"
          }`}
        />

        {errors.no_telp && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.no_telp.message}
          </p>
        )}
      </div>

      <div className="flex justify-end pt-3">
        <button
          type="button"
          onClick={nextStep}
          className="rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-900"
        >
          Lanjut ke Step 2
        </button>
      </div>
    </div>
  );
}

export default StepOne;
