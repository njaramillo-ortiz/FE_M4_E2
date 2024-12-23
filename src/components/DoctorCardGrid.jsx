import { Grid, GridColumn, Segment } from "semantic-ui-react";
import { DoctorCard } from "./DoctorCard";

export function DoctorCardGrid(props)
{
    return(
        <Segment>
            <h1>Equipo Médico</h1>
            <Grid doubling columns={3}>
                {
                    props.doctors.map((item, i) =>
                    {
                        return(
                            <GridColumn key={i}>
                                <DoctorCard doctor={item}/>
                            </GridColumn>
                        );
                    })
                }
            </Grid>
        </Segment>
    );
}