<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\RegisterController@login');
Route::middleware('auth:api')->post('/logout','API\RegisterController@logout');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    Route::resource('products', 'API\ProductController');
    Route::resource('profile','ProfileController');
    
});
