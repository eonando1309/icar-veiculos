[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$imagePath = "c:\Users\Elvis Roberto\Documents\GitHub\icar-veiculos\public\logo-icar.png"
$outputPath = "c:\Users\Elvis Roberto\Documents\GitHub\icar-veiculos\public\favicon.ico"

try {
    $image = [System.Drawing.Image]::FromFile($imagePath)
    $resized = New-Object System.Drawing.Bitmap(128, 128)
    $graphics = [System.Drawing.Graphics]::FromImage($resized)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($image, 0, 0, 128, 128)
    $resized.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Icon)
    
    Write-Host "Favicon criado com sucesso em 128x128: $outputPath"
    
    $graphics.Dispose()
    $resized.Dispose()
    $image.Dispose()
} catch {
    Write-Host "Erro: $_"
}
