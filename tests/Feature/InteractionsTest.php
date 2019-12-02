<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class InteractionsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAll()
    {
        $response = $this->get(env('API_URL') . '/interactions');
        $response->assertStatus(200);
    }
    public function testCreate()
    {
        //$this->assertTrue(true);
        $response = $this->get(env('API_URL') . '/interactions/create');
        $response->assertStatus(200);
    }
}
