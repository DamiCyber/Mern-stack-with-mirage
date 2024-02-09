import { createServer } from 'miragejs';

export const startServer = () => {
    createServer({
        routes() {
            this.get('/api/users', () => ({
                users: [
                    { id: 1, name: 'Damola', skill: 'HTML | CSS | JS | React | Node js.'},
                    { id: 4, name: 'Seun', skill:  'HTML | CSS | JS | React | Node js.'  },
                    { id: 2, name: 'Jude', skill: 'HTML | CSS | JS | React| Node js.'},
                    { id: 3, name: 'Timileyin', skill:  'HTML | CSS | JS| React | Node js.'  },
                    { id: 5, name: 'Adebayo', skill: 'HTML | CSS | JS | React|Node js.'},
                    { id: 5, name: 'Pamilerin', skill: 'HTML | CSS | JS | React | Node js.'  },
                    { id: 5, name: 'Kenny', skill: 'HTM L| CSS | JS |React | Node js.' },
                    { id: 5, name: 'Ope', skill: 'HTM L| CSS | JS |React |Node js.'  }
                ]
            }));
        }
    });
};

