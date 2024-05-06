<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WawasanController extends Controller
{
    public function index()
    {
        return inertia('Wawasan');
    }
}
