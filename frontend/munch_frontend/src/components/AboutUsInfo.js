import {DescriptionContainer, TimetableContainer, ContactContainer, MapContainer, ImgContainer, InfoContainer, Title, Description, Image, List,ListItem, Map} from "./aboutUsInfo-styling";
import { descriptionInfo, contactInfo, timetable, images } from "../data/aboutUs";
import {AiOutlineMail, AiFillPhone, AiOutlineWhatsApp} from 'react-icons/ai';

const AboutUsInfo = () => {
    return (
        <div>
            <DescriptionContainer>
                <ImgContainer>
                    <Image src={require(`../${images.descriptionInfoImage}`)} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{descriptionInfo.title}</Title>
                    <Description>{descriptionInfo.description}</Description>
                </InfoContainer>
            </DescriptionContainer>

            <TimetableContainer>
                <InfoContainer>
                    <List>
                        <ListItem>{timetable.monday}</ListItem>
                        <ListItem>{timetable.tuesday}</ListItem>
                        <ListItem>{timetable.wednesday}</ListItem>
                        <ListItem>{timetable.thursday}</ListItem>
                        <ListItem>{timetable.friday}</ListItem>
                        <ListItem>{timetable.saturday}</ListItem>
                        <ListItem>{timetable.sunday}</ListItem>
                    </List>
                </InfoContainer>
                <ImgContainer>
                    <Image src={require(`../${images.timetableImage}`)} />
                </ImgContainer>
            </TimetableContainer>

            <ContactContainer>
                <ImgContainer>
                    <Image src={require(`../${images.descriptionInfoImage}`)} />
                </ImgContainer>
                <InfoContainer>
                    <List>
                        <ListItem><AiOutlineMail style={{marginRight: "10px"}}/>{contactInfo.email}</ListItem>
                        <ListItem><AiFillPhone style={{marginRight: "10px"}}/>{contactInfo.phone}</ListItem>
                        <ListItem><AiOutlineWhatsApp style={{marginRight: "10px"}}/>{contactInfo.whatsapp}</ListItem>
                    </List>
                </InfoContainer>
            </ContactContainer>

            <MapContainer>
                <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.827179393135!2d-1.9834213841699833!3d43.31787708206623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a5fdfd56ecd1%3A0xebd1eae11be9f1ca!2sMUNCH%20LENCER%C3%8DA!5e0!3m2!1ses!2ses!4v1640439226025!5m2!1ses!2ses" allowFullScreen="" loading="lazy" />
            </MapContainer>
        </div>
    )
}

export default AboutUsInfo;