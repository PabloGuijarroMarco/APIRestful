<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ObrasPorIdiomaTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAll()
    {
        $response = $this->get(env('API_URL') . '/obrasporidioma');
        $response->assertStatus(200);
    }
    public function testCreate()
    {
        $response = $this->get(env('API_URL') . '/obrasporidioma/create');
        $response->assertStatus(200);
    }
}
