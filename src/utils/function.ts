import { AuthError } from "src/types/auth";
import { getUrlImage, GetUrlImageType } from "src/api/getUrlImage";
import * as FileSystem from "expo-file-system";

export const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

  const cpfDigits = cpf.split("").map((el) => +el);
  const rest = (count: number) =>
    ((cpfDigits
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10];
};

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const handleError = (error: any): AuthError => {
  if (error.response) {
    return {
      message: error.response.data?.message || "Erro desconhecido",
      code: error.response.data?.code,
      status: error.response.status,
    };
  }
  return {
    message: error.message || "Erro de conexão",
  };
}

export const uploadImage = async (
  imageName: string,
  imageUri: string,
  name: string,
): Promise<string> => {
  try {
    const responseImage: GetUrlImageType = (await getUrlImage(
      imageName.toLowerCase().replace(/\s/g, '') + name,
    )) as GetUrlImageType;


    const imageUrl = responseImage.url;

    // Detectar o tipo correto da imagem pela extensão
    const extension = imageUri.toLowerCase().split('.').pop();
    let contentType = 'image/jpeg'; // fallback
    
    switch (extension) {
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpeg';
        break;
      case 'png':
        contentType = 'image/png';
        break;
      case 'gif':
        contentType = 'image/gif';
        break;
      case 'webp':
        contentType = 'image/webp';
        break;
    }

    const uploadResult = await FileSystem.uploadAsync(responseImage.signedUrl, imageUri, {
      httpMethod: 'PUT',
      headers: {
        'Content-Type': contentType,
      },
    });


    if (uploadResult.status !== 200 && uploadResult.status !== 201) {
      throw new Error(`Upload failed with status: ${uploadResult.status}`);
    }

    return imageUrl;
  } catch (error) {
    console.error('Erro detalhado no upload:', error);
    throw new Error('Erro ao fazer upload da imagem');
  }
};