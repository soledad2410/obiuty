<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route as Route;
use App\Http\Requests;
use Illuminate\Support\Facades\View;
use Auth;
class BaseController extends Controller
{
    protected $action;
    protected $controller;
    protected $view;

    public function __construct(Route $route)
    {
        list($controller, $action) = explode('@', $route->getActionName());
        $this->action = $action;
        $this->controller = substr(strrchr($controller, '\\'), 1);
        $this->view = 'module.' . str_replace('controller', '', strtolower($this->controller)) . '.' . $this->action;
        
        /** Share variable */
        View::share('user', Auth::user());
    }   
}
