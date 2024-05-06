<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAnakRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'image_path' => ['nullable', 'image'], // Validasi untuk foto anak
            'nama' => 'required|string|max:255', // Validasi untuk nama anak
            'nik' => 'required|string|max:16', // Validasi untuk NIK anak
            'tanggal_lahir' => 'required|date', // Validasi untuk tanggal lahir anak
            'usia' => 'required|string|max:20', // Validasi untuk usia anak
            'jk' => ['required', Rule::in(['Laki-laki', 'Perempuan'])], // Validasi untuk jenis kelamin anak
            'nama_ibu' => 'required|string|max:255', // Validasi untuk nama ibu anak

        ];
    }
}
