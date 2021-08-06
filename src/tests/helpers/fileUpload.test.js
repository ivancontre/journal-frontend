import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'dbsn0szhn', 
    api_key: '979962792522249', 
    api_secret: '5_qc1Xd4wrpLCM0WOXvli3EPaAw',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de cargar un archivo y retornar el URL ', async (done) => {
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');

        const public_ids = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(public_ids, {}, () => {
            done();
        });


    })

    test('debe de retornar un error ', async () => {
        

        const file = new File([], 'foto.png');

        const url = await fileUpload(file);

        expect(url).toBe(null);
        
    })
    
})
