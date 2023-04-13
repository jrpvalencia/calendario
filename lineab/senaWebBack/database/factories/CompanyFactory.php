<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'razonSocial' => $this->faker->name(),
            'nit' => $this->faker->name(),
            'rutaLogo' => '/default/logo.jpg',
            'representanteLegal' => $this->faker->name(),
            'digitoVerificacion' => $this->faker->numberBetween([1, 20]),
        ];
    }
}
