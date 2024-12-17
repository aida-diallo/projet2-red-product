
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100vh;
    background-image: url(/background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        height: 100vh;
      padding: 20px;
    }

    h1 {
        color: white;
        font-weight: 700;
        text-align: center;
        font-size: 20px;
        margin-left: 10px;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    img {
        width: 30px;
        height: 30px;
    }
`;
export const ErrorMessage = styled.div`
`;
export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: 50px;
    margin-top: 20px;

    h1 {
        font-size: 23px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 600;
        line-height: 16px;

        @media (max-width: 768px) {
            font-size: 30px;
            padding-top: 0px;

            img{
             padding-top: 50px;
            }
        }
    }
`;

export const FormContainer = styled.form`
    background-color: white;
    padding: 40px;
    padding-left: 20px;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 340px;
    height: 390px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 20px;
    }
`;

export const Input = styled.input`
    margin: 15px 0;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #D2D2D2;
    width: 100%;
    margin-top: 30px;
   outline: none;



    @media (max-width: 768px) {
        padding: 8px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #45484B;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin: 15px 0;

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

export const LinkContainer = styled.div`
    text-align: center;
    margin-top: -10px;
    position: relative;
    top: -50px;
    color: white;

    div {
        margin-top: 20px;
    }

    a {
        color: #FCD34D;
        text-decoration: none;
        margin: 10px 0;

        &:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    flex-wrap: nowrap;
    white-space: nowrap;

    input {
        margin-left: -80px;

        @media (max-width: 768px){
          position: relative;
          left: -50px;
        }
    }

    @media (max-width: 768px) {
      display: flex;
        align-items: flex-start;
        padding-left: 0;
        gap: 0;
        padding: 0;
        margin: 0;
      
    }
`;

export const LabelText = styled.span`
    font-size: 16px;
    display: flex;
    position: relative;
    left: -85px;
    top: 8px;

    @media (max-width: 768px) {
        left: -170px;
        top: 25px;
        font-size: 14px;
    }
`;
