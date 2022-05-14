import React from "react";
import { Button, Link, Paper, Typography } from "@mui/material";

const Homepage: React.FC = () => {
    return (
        <Paper
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            elevation={2}
        >
            <Typography component={"h1"} variant={"h4"} mb={1}>
                {"Fuck Your Mom"}
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                There is a homepage that explains what the project does, what's interesting about
                this project, and how to get involved in this project.
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                You can apply for the corresponding subdomain by sending email to{" "}
                <Link href={"mailto:admin@fuckur.mom"} underline={"hover"}>
                    {"admin@fuckur.mom"}
                </Link>{" "}
                , but you need to clarify your identity and the reason for the application.
            </Typography>
            <Typography component={"p"} variant={"body1"} margin={1}>
                Don't get me wrong, we have all the respect for your mother. This project gives you
                the freedom to create by distributing subdomains to you, which may achieve the
                bashing of idiots. We firmly believe that bashing idiots can change idiots or prompt
                idiots to self-harm and commit suicide, thereby reducing the number of idiots in the
                world.
            </Typography>
            <Button size={"large"}>{"Go for details"}</Button>
        </Paper>
    );
};

export default Homepage;
