<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EdicionesQuijoteTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAll()
    {
        $response = $this->get(env('API_URL') . '/edicionesquijote');
        $response->assertStatus(200);
    }
    public function testCreate()
    {
        $response = $this->get(env('API_URL') . '/edicionesquijote/create');
        $response->assertStatus(200);
    }
}
