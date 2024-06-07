import { Stream } from "stream";
import BasePart from "./base-part";

/**
 * ## Bibliography
 *
 * This part contains information on citations and references within a document.
 * The bibliography description is usually stored in the `/customXML/bib{n}.xml`.
 *
 * ### Root Tag
 * `<Sources SelectedStyle="format_filename" 
 *            StyleName="APA | Chicago | GOST - Name Soft | GOST - Title Sort 
 *                           | ISO 690 - First Element and Date | ISO 690 - Numerical Reference 
 *                           | MLA | SIST02 | Turabian | any other value"
 *             URI="string">`
 *
 * ### Values
 * - `<AbbreviatedCaseNumber/>`
 * - `<AlbumTitle/>`
 * - `<Artist/>`
 * - `<Author/>`
 * - `<BookAuthor/>`
 * - `<BookTitle/>`
 * - `<Broadcaster/>`
 * - `<BroadcastTitle/>`
 * - `<CaseNumber/>`
 * - `<ChapterNumber/>`
 * - `<City/>`
 * - `<Comments/>`
 * - `<Compiler/>`
 * - `<Composer/>`
 * - `<Conductor/>`
 * - `<ConferenceName/>`
 * - `<Corporate/>`
 * - `<Counsel/>`
 * - `<CountryRegion/>`
 * - `<Court/>`
 * - `<Day/>`
 * - `<DayAccessed/>`
 * - `<Department/>`
 * - `<Director/>`
 * - `<Distributor/>`
 * - `<Edition/>`
 * - `<Editor/>`
 * - `<First/>` - Person's first or given name
 * - `<Guid/>`
 * - `<Institution/>`
 * - `<InternetSiteTitle/>`
 * - `<Interviewee/>`
 * - `<Interviewer/>`
 * - `<Inventor/>`
 * - `<Issue/>`
 * - `<JournalName/>`
 * - `<Last/>` - Person's last or family name
 * - `<LCID//>` - Locale ID (ex. ja-JP, en-US ...)
 * - `<Medium/>`
 * - `<Middle/>` - Person's middle or other name.
 * - `<Month/>`
 * - `<MonthAccessed/>`
 * - `<NameList/>`
 * - `<NumberVolumes/>`
 * - `<Pages/>`
 * - `<PatentNumber/>`
 * - `<Performer/>`
 * - `<PeriodicalTitle/>`
 * - `<Person/>`
 * - `<ProducerName/>`
 * - `<ProductionCompany/>`
 * - `<PublicationTitle/>`
 * - `<Publisher/>`
 * - `<RecordingNumber/>`
 * - `<RefOrder/>`
 * - `<Reporter/>`
 * - `<ShortTitle/>`
 * - `<Source/>` - A source entry
 * - `<SourceType/>`
 * - `<StandardNumber/>`
 * - `<StateProvince/>`
 * - `<Station/>`
 * - `<Tag/>`
 * - `<Theater/>`
 * - `<ThesisType>`
 * - `<Title/>`
 * - `<Translator/>`
 * - `<Type/>` - Patent type
 * - `<URL/>`
 * - `<Version/>`
 * - `<Volume/>`
 * - `<Writer/>`
 * - `<Year/>`
 * - `<YearAccessed/>`
 */
export default class Bibliography extends BasePart {
    render(): Stream {
        throw new Error("Method not implemented.");
    }
}
