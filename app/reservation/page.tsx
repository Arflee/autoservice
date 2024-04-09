"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Page() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet
        dolor elit, vel volutpat ex ultricies id. Proin vitae semper libero,
        vitae sodales lectus. Nunc egestas congue ipsum, id semper risus laoreet
        ut. Donec vel justo euismod, placerat lorem non, pulvinar nunc. Donec ac
        ipsum bibendum, viverra nisl id, finibus ipsum. Integer condimentum ante
        at molestie vestibulum. Sed varius tellus ipsum, at molestie leo
        interdum eget. Mauris eget placerat metus. Etiam placerat lacinia
        turpis, nec blandit est volutpat at. Donec pulvinar auctor justo, sit
        amet consequat velit cursus id. Integer hendrerit felis quis sapien
        sodales consectetur. In nec odio lorem. Sed eget ante non est
        sollicitudin volutpat. Curabitur luctus justo lorem, et congue est
        vulputate in. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Quisque fringilla, diam in maximus pretium, ipsum odio
        pellentesque mi, eget faucibus velit mauris vitae dui. Suspendisse
        sagittis a purus vel posuere. Aenean gravida diam odio, feugiat
        condimentum felis efficitur at. Ut cursus, nunc at faucibus tempor,
        velit eros congue quam, ut accumsan lorem elit nec tortor. Curabitur
        porta ornare sollicitudin. Integer id tempor dui, in maximus turpis.
        Curabitur commodo quam eget turpis aliquet, eu sagittis tellus maximus.
        Mauris scelerisque facilisis metus ac viverra. Curabitur elit quam,
        semper a tortor nec, consectetur ornare lorem. Nam tristique enim id
        ligula facilisis, at iaculis velit ultricies. Suspendisse non viverra
        erat, in euismod neque. Quisque laoreet mauris non lorem pulvinar
        dignissim. Nam nec metus vehicula, pellentesque ante quis, vulputate
        lorem. Mauris blandit ex in ex cursus, vel faucibus tortor pellentesque.
        Vivamus eu congue orci. Phasellus cursus, dui ac blandit dictum, est
        elit condimentum leo, ut pellentesque odio massa non ante. Aliquam erat
        volutpat. In blandit justo quis enim mollis vestibulum. Duis pulvinar
        mattis pulvinar. Cras eu mauris sed sapien sodales accumsan. Mauris quis
        viverra lorem, eu semper massa. Aliquam congue lorem at risus iaculis
        volutpat. Nam volutpat lacus eget ipsum lacinia lacinia. Suspendisse sit
        amet ligula justo. Nullam commodo consectetur lacus in cursus. Maecenas
        vel nulla risus. Proin mollis ante enim, eget luctus lacus volutpat nec.
        Sed id condimentum tortor. Nulla tincidunt magna ac risus venenatis
        aliquam. Donec et maximus neque. Pellentesque dapibus efficitur
        imperdiet. Donec aliquet fermentum quam, sit amet aliquam turpis
        vulputate vitae. Donec suscipit quam eget semper lacinia. Mauris
        ullamcorper risus a eros ornare volutpat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur bibendum ac arcu non luctus.
        Phasellus feugiat at magna blandit accumsan. Sed sed enim et felis
        tempor sollicitudin ac nec ex. Ut consectetur aliquam leo, dignissim
        commodo sapien semper sit amet. Sed vestibulum tincidunt metus id
        commodo. Sed dignissim elit nec vehicula egestas. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.{" "}
      </p>
    </>
  );
}
