<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Interaction extends Model
{
    protected $fillable = [
        'date',
        'time',
    ];
}
