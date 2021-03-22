export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve({
                token: '12938123012fj2fmmf0sad9fm2398ml0',
                user: {
                    name: 'Nathanael',
                    email: 'nathanael@exemplo.com'
                },
            });
        }, 2000);
    })
}