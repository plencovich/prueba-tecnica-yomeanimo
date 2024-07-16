<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscribe;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function save(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:subscribes',
        ]);

        $subscribe = new Subscribe();
        $subscribe->name = $request->input('name');
        $subscribe->email = $request->input('email');
        $subscribe->save();

        return Inertia::render('LandingPage', [
            'success' => 'Suscripto correctamente!!'
        ]);
    }

    public function index()
    {
        $subscribes = Subscribe::all();

        return Inertia::render('ListAll', [
            'subscribes' => $subscribes,
        ]);
    }
}
