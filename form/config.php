<?php
/**
 * Configurar configuração do servidor de e-mail
 */

//para onde gostaríamos de enviar e-mail
$recipientEmail = 'brachynus@hotmail.com';
$recipientName = 'Shiftweb';

//Endereço que ficará visível no campo "De"
$fromEmail = 'brachynus@hotmail.com';
$fromName = 'Shiftweb';

//Mensagens de erro de validação
$requiredMessage = 'Campo é obrigatório';
$invalidEmail = 'E-mail inválido';

/**
 * Configuração avançada - sem necessidade de modificação
 */

require_once(dirname(__FILE__) . '/vendor/ctPHPMailer.php');
$mail = new ctPHPMailer();

//defina seu endereço de e-mail
$mail->AddAddress($recipientEmail, $recipientName);
$mail->SetFrom($fromEmail, $fromName);

$debug = false; //se ocorrerem problemas, defina como verdadeiro para ver as mensagens de depuração

/**
 * Para configuração GMAIL, use estes valores:
 *
 * $ mail-> Host = "smtp.gmail.com"; // servidor SMTP
 * $ mail-> Username = "mail@gmail.com"; // nome de usuário da conta SMTP
 * $ mail-> Senha = "sua senha"; // senha da conta SMTP
 * $ mail-> Porta = 465; // definir a porta SMTP para o servidor GMAIL
 * $ mail-> SMTPSecure = "ssl";
 *
 * Mais opções de configuração disponíveis aqui: https://code.google.com/a/apache-extras.org/p/phpmailer/wiki/ExamplesPage
 * /

/ **
 * CONFIGURAÇÃO DO SERVIDOR
 * /

/ **
 * Config for SMTP server - descomente se não quiser usar a função PHP mail ()
 ** /

/ **
 * $ mail-> Host = "mail.seudominio.com."; // define o servidor SMTP
 * $ mail-> Username = "username"; // nome de usuário da conta SMTP
 * $ mail-> Password = "senha"; // senha da conta SMTP
 * $ mail-> SMTPAuth = true; // habilitar autenticação SMTP - verdadeiro se nome de usuário e senha necessários
 * $ mail-> Porta = 587; // definir a porta SMTP (geralmente 587 ou 465 quando SSL)
 * $ mail-> IsSMTP (); descomente para habilitar smtp
 * $ mail-> SMTPDebug = $ debug? 2: 0; // depurar mensagens - defina depurar como falso na produção!
 * /