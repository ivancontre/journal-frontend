export const fileUpload = async (file) => {

    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dbsn0szhn/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const respJson = await resp.json();
            return respJson.secure_url;

        } else {
            throw await resp.json();
        }



    } catch (error) {
        throw error;
    }



    //return imageUrl;
}