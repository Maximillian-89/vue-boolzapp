const app = new Vue (
    {
    el: `#root`,
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '16:30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '10:10',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '210:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '15:30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        contactIndex: null,
        new_sent_msg: ""
    },
    methods: {
        sentMessage: function() {
            let timeNow = dayjs().format('HH:mm');
            if( this.new_sent_msg != "" ) {
                
                this.contacts[this.contactIndex].messages.push(
                    {
                        date: timeNow,
                        message: this.new_sent_msg,
                        status: 'sent',
                    }
                );
                this.new_sent_msg = "";

                setTimeout(
                    () => { //**? Qui usiamo l'arrow function perchè il "this" altrimenti farre capo a windows, e non a vue.
                        this.contacts[this.contactIndex].messages.push(
                            {
                                date: timeNow,
                                message: 'ok',
                                status: 'recived'
                            });
                    }, 1000
                );
            }
        },

        changeBgd: function() {
            if( this.contactIndex == null ) {
                return "intro-connection";
            } else {
                return "main-chat-message";
            }
        }
    }
}
);

dayjs().format('HH:mm');