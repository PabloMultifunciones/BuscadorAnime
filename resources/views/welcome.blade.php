<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Buscador Anime</title>

        <link href="{{asset('favicon.png')}}" rel="shortcut icon">
        <link href="{{asset('css/welcome.css')}}" rel="stylesheet">
        <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet">
    </head>
    <body class="cuerpo">
        <div class="container">
            <h1 class="d-flex justify-content-center">BuscadorAnime.com</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="searchBox" placeholder="¿Que Anime desea buscar?">
                <div class="input-group-append">
                    <button type="button" class="btn btn-outline-secondary" id="searchButton" >Buscar</button>
                </div>
            </div>
            <div class="row d-flex justify-content-center" id="resultado"></div>
        </div>
        <script src="{{asset('js/search.js')}}"></script>
    </body>
</html>
