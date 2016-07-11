<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route as Route;
use App\Http\Requests;
use Illuminate\Support\Facades\View;
use Auth;
use App\User;
class BaseController extends Controller
{
    protected $action;
    protected $module;
    protected $view;

    public function __construct(Route $route)
    {
        list($controller, $action) = explode('@', $route->getActionName());
        $this->action = $action;
        $this->module = substr(strrchr($controller, '\\'), 1);
        $this->module = str_replace('controller', '', strtolower($this->module));
        $this->view = 'module.' . $this->module . '.' . $this->action;
        
        /** Share variable */
        $user = Auth::user();
        View::share('user', $user);

        /** ACL config */
        $module = \Config::get('acl.acl.' . strtolower($this->module));
        $role = \Config::get('acl.acl.' . $this->module . '.roles.' . $this->action);
        if(!$module || !$role){
            abort(403, 'Unauthorized action.');
        }
        $privilege = $role['allow'];
        var_dump($user->group());

    }

    private function checkUserPrivilege()
    {

    }
}
