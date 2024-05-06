<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreImunisasiRequest extends FormRequest
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
            'jenis_imunisasi' => [
                'required',
                'string',
                'in:Hepatitis B,BCG,Polio tetes 1,DPT-HB-Hib 1,Polio tetes 2,PCV 1,DPT-HB-Hib 2,Polio tetes 3,PCV 2,DPT-HB-Hib 3,Polio tetes 4,Polio Suntik(IPV),Campak-Rubella,JE,PCV 3'
            ],
            'umur' => ['required', 'integer', 'min:0'],
            'tgl_imunisasi' => ['required', 'date'],
        ];
    }
}
