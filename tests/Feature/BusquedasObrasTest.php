<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class BusquedasObrasTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAll()
    {
        $response = $this->get(env('API_URL') . '/busquedasobras');
        $response->assertStatus(200);
    }
    public function testCreate()
    {
        $response = $this->get(env('API_URL') . '/busquedasobras/create');
        $response->assertStatus(200);
    }
}
