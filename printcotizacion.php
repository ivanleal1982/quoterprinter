<?php
require('fpdf.php');
$idcotizacion="";
class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    $this->Image('img/barra.png',0,0,210);
    // Logo
    $this->Image('img/logo.png',10,8,50);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Movernos a la derecha
    $this->Cell(80);
    // Título
    if (isset($_GET['idcotizacion'])) {
        $idcotizacion=$_GET['idcotizacion'];
    }
    $this->Cell(30,10,utf8_decode('Cotización Nro ' . $idcotizacion),0,0,'R');
 //   $this->Cell(110,30,"Cel: +584127221228",0,0,'C');

    // Salto de línea
    $this->Ln(5);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

// Creación del objeto de la clase heredada
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
$pdf->SetAutoPageBreak(true,15);

if (isset($_GET['idempresa'])) {
//$numeros = json_decode($_GET['idempresa']);
//$pdf->Cell(0,10,"Fecha: " . $_GET['fecha'],0,1);
//$pdf->Cell(0,10,"Vendedor: " . $_GET['vendedor'],0,1);
$pdf->Cell(0,5,"Cel: +584127221228",0,1,'R');
$pdf->Cell(0,5,"Instagram: @improomve",0,1,'R');
$pdf->Cell(0,5,"E-mail: improomve@gmail.com",0,1,'R');
$deffecha=date("d/m/Y", strtotime($_GET['deffecha']));
//$deffechaprod=date("d/m/Y H:i:s", strtotime($_GET['deffechaprod']));
$pdf->Cell(0,5,"Fecha: " . $deffecha,0,1,'R');
$pdf->Cell(0,10,"Cliente: " . $_GET['nombreempresa'],0,1);
$pdf->Cell(0,10,"R.I.F: " . $_GET['rif'],0,1);
$pdf->Cell(0,10,"Direccion: " . $_GET['direccion'],0,1);
$pdf->Cell(0,10,"Telefono: " . $_GET['telefono1'],0,1);
$pdf->Ln(5);
//$pdf->Cell(0,10,"E-mail: " . $_GET['email'],0,1);
//echo "Números seleccionados: " . $_GET['idempresa'];
}
//Titulos de Celdas Descriptivas
$pdf->Cell(20,8,'Cant',1,0,'C',0);
$pdf->Cell(120,8,'Descripcion',1,0,'C',0);
$pdf->Cell(25,8,'Unitario',1,0,'C',0);
$pdf->Cell(25,8,'Total',1,1,'C',0);

$descripcion_array = explode(',', $_GET['defds']);
$cantidad_array = explode(',', $_GET['defcantidad']);
$ancho_array = explode(',', $_GET['defancho']);
$alto_array = explode(',', $_GET['defalto']);
$metros_array = explode(',', $_GET['defmetros']);
$subtotalmaterial_array = explode(',', $_GET['defsubtotalmaterial']);
$totalmaterial_array = explode(',', $_GET['deftotalmaterial']);
$totalimpresion_array = explode(',', $_GET['deftotalimpresion']);
$subtotalgeneral =0;

for($i=0;$i<count($cantidad_array);$i++){

    $unitario = (float)$subtotalmaterial_array[$i] + (float)$totalmaterial_array[$i] + (float)$totalimpresion_array[$i];
    $total = (float)$unitario * (int)$cantidad_array[$i];
$pdf->Cell(20,8,$cantidad_array[$i],0,0,'C',0);
$pdf->SetFont('Times','',8);
$pdf->Cell(120,8,$descripcion_array[$i],0,0,'C',0);
$pdf->SetFont('Times','',12);
$pdf->Cell(25,8,'$' . $unitario,0,0,'R',0);
$pdf->Cell(25,8,'$' .  $total,0,1,'R',0);
$subtotalgeneral +=$total;
    //$pdf->Cell(0,10,utf8_decode('Imprimiendo línea número '.$i) ,0,1);
}
$pdf->Ln(10);
$pdf->SetDrawColor(0,80,180);
$pdf->SetFillColor(0,80,180);
$pdf->SetTextColor(200,220,255);
$pdf->Cell(20,8,'________________',0,0,'C',0);
$pdf->Cell(120,8,'__________________________________________________________',0,0,'C',0);
$pdf->Cell(25,8,'_______________________________________',0,0,'',0);
$pdf->Cell(25,8,'______',0,1,'',0);

$pdf->SetTextColor(0,0,0);
$pdf->Cell(20,8,' ',0,0,'C',0);
$pdf->Cell(120,8,' ',0,0,'C',0);
$pdf->Cell(25,8,'Sub-Total',0,0,'',0);
$pdf->Cell(25,8,'$' . number_format($subtotalgeneral,2),0,1,'R',0);

$iva = $subtotalgeneral * 0.16;
$pdf->Cell(20,8,' ',0,0,'C',0);
$pdf->Cell(120,8,' ',0,0,'C',0);
$pdf->Cell(25,8,'I.V.A. 16%',0,0,'',0);
$pdf->Cell(25,8,'$' . number_format($iva,2),0,1,'R',0);

$totalmasiva = $subtotalgeneral + $iva;
$pdf->Cell(20,8,' ',0,0,'C',0);
$pdf->Cell(120,8,' ',0,0,'C',0);
$pdf->Cell(25,8,'Total',0,0,'',0);
$pdf->Cell(25,8,'$' . number_format($totalmasiva,2),0,1,'R',0);

$pdf->Output();
//unset($pdf);


?>


