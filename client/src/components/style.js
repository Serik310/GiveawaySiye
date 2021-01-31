import { makeStyles } from '@material-ui/styles';

const UseStyles = makeStyles(
    {
        free_giveaway: {
            backgroundColor: 'green',
        },
        paid_giveaway: {
            backgroundColor: 'red',
        },
        back_giveaway: {
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2ad293a6-e2f2-4770-a7e8-fc1bd72985fc/d9utqpg-77832ddd-0ccf-4d97-9b9c-7883c5e1aa27.png)',
            backgroundPosition: 'center',
            height: '600px',
            boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.75)',
        },
        z_giveaway: {
            paddingTop: '130px',
            paddingBottom: '130px',
            height: '100%',
            '& div': {
                height: '100%',
                '& img': {
                    width: '100%',
                    height: '100%',
                }
            },
        },
        container_giveaway: {
            height: '100%',
        },
        back_table: {
            paddingTop: '20px',
        },
        
        total_info: {
            borderLeft: '2px solid black',
            '& span': {
                fontWeight: 'bold',
                fontSize: '24px',
            },
            '& li': {
                backgroundColor: (props) => props.backgroundColor,
                listStyle: 'none',
                padding: '20px',
            },
            '& ul': {
                paddingLeft: '0px',
            }
        },
        page_now: {
            borderRight: '2px solid black',
            paddingRight: '4px',
        },
        short_table: {
            height: '80px',
            width: '120px',
            '& img': {
                width: '100%',
                height: '100%',
            },
        },
        }
);

export default UseStyles;