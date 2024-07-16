<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});

Route::get('/subscribes', [HomeController::class, 'index']);
Route::post('/save-user', [HomeController::class, 'save'])->name('save.user');
