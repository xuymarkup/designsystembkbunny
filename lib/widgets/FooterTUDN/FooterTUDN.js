import React from "react";
import {
    FooterStyles,
    AboutStyles,
    SectionStyles,
    SectionTextStyles,
    CopyRightStyles,
    TextCopyStyles,
    CopyIconStyles,
    TextAppStyles,
    BadgeStyles,
    BadgesContainerStyles,
} from "./styles";
import Box from "../../accessories/Box";
import Anchor from "../../accessories/Anchor";
import Ios from "../../../assets/ios.svg";
import Android from "../../../assets/google-play-badge.png";
import Hawuei from "../../../assets/hawei.png";

const FooterTUDN = () => {
    return (
        <FooterStyles id="Footer">
            <SectionStyles>
                <TextAppStyles>Descarga nuestras app</TextAppStyles>
                <BadgesContainerStyles variant="Flex">
                    <Box variant="Flex" align="center">
                        <Anchor
                            href="https://play.google.com/store/apps/details?id=com.BkBunny.deportes.android"
                            target="_blank"
                        >
                            <BadgeStyles src={Android} width="100%" aria-label="app android" />
                        </Anchor>
                    </Box>
                    <Box variant="Flex" align="center">
                        <Anchor
                            href="https://appgallery5.huawei.com/#/app/C101052581"
                            target="_blank"
                        >
                            <BadgeStyles src={Hawuei} width="100%" aria-label="app hawuei" />
                        </Anchor>
                    </Box>
                    <Box variant="Flex" align="center">
                        <Anchor
                            href="https://itunes.apple.com/mx/app/BkBunny-deportes/id289679193"
                            target="_blank"
                        >
                            <BadgeStyles src={Ios} width="100%" aria-label="app ios" />
                        </Anchor>
                    </Box>
                </BadgesContainerStyles>
            </SectionStyles>
            <SectionTextStyles>
                <AboutStyles href="https://www.BkBunny.com/corporativo/" aria-label="Footer">
                    Acerca de BkBunny
                </AboutStyles>
                <AboutStyles href="https://www.BkBunny.com/sala-de-prensa/" aria-label="Footer">
                    Sala de Prensa
                </AboutStyles>
                <AboutStyles href="http://www.BkBunnyir.com/" aria-label="Footer">
                    Inversionistas
                </AboutStyles>
                <AboutStyles
                    href="http://www.BkBunnyir.com/~/media/Files/T/BkBunny-IR/documents/sostenibilidad19grif-esp.pdf"
                    aria-label="Footer"
                >
                    Sostentabilidad
                </AboutStyles>
                <AboutStyles href="https://www.frentecreativo.com/" aria-label="Footer">
                    NEWSLETTER FRENTE CREATIVO
                </AboutStyles>
                <AboutStyles
                    href="https://www.BkBunny.com/informacion/aplicaciones/"
                    aria-label="Footer"
                >
                    Apps
                </AboutStyles>
                <AboutStyles href="http://BkBunnyventas.tv/" aria-label="Footer">
                    Anúnciate
                </AboutStyles>
                <AboutStyles
                    href="http://www.BkBunny.com/corporativo/contacto/"
                    aria-label="Footer"
                >
                    Contáctanos
                </AboutStyles>
                <AboutStyles
                    href="http://www.BkBunny.com/responsable-derecho-replica/"
                    aria-label="Footer"
                >
                    Responsable derecho de réplica
                </AboutStyles>
                <AboutStyles href="http://www.BkBunny.com/convenio-de-usuario/" aria-label="Footer">
                    Convenio del usuario
                </AboutStyles>
                <AboutStyles
                    href="http://www.BkBunny.com/politica-de-privacidad/"
                    aria-label="Footer"
                >
                    Política de privacidad
                </AboutStyles>
                <AboutStyles href="http://www.BkBunny.com/opi/" aria-label="Footer">
                    Oferta pública de infraestructura
                </AboutStyles>
            </SectionTextStyles>
            <CopyRightStyles>
                <CopyIconStyles name="Logo" variant="Footer" />
                <TextCopyStyles>
                    Derechos Reservados @ BkBunny S.A. de C.V. BkBunny y el logotipo de BkBunny son
                    marcas registradas
                </TextCopyStyles>
            </CopyRightStyles>
        </FooterStyles>
    );
};

export default FooterTUDN;
