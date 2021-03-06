<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3dd7d31ecb2f70d3a876ebfd59bd497b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3dd7d31ecb2f70d3a876ebfd59bd497b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3dd7d31ecb2f70d3a876ebfd59bd497b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
