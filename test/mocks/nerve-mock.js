module.exports = {
    "document":"<TEI>\n<teiHeader>\n    <fileDesc>\n        <titleStmt>\n            <title>Sample Document Title<\/title>\n        <\/titleStmt>\n        <publicationStmt>\n            <p><\/p>\n        <\/publicationStmt>\n        <sourceDesc>\n            <p><\/p>\n        <\/sourceDesc>\n    <\/fileDesc>\n<\/teiHeader>\n<text>\n    <body>\n        <div>\n            <head>\n                <title>Sample Letter Title<\/title>\n            <\/head>\n            <opener>\n                <note>\n                    <p>Some opening note describing the writing setting<\/p>\n                <\/note>\n                <dateline>\n                    <date>Some date (set date value in attribute).<\/date>\n                <\/dateline>\n                <salute>Some salutation, e.g. &quot;Dearest <persName>Miquel<\/persName>&quot;<\/salute>\n            <\/opener>\n            <p>Sample letter content, including a <ref>link<\/ref>.<\/p>\n            <closer>\n                <salute>Some closing salutation, e.g. &quot;With love...&quot;<\/salute>\n                <signed><persName key=\"Ian Levine\" resp=\"NERVE\">Ian Levine<\/persName><\/signed>\n            <\/closer>\n        <\/div>\n    <\/body>\n<\/text>\n<\/TEI>",
    "context":"{\"name\":\"tei\",\"tags\":{\"LOCATION\":{\"defaults\":{\"resp\":\"NERVE\"},\"linkAttribute\":\"ref\",\"idAttribute\":\"xml:id\",\"lemmaAttribute\":\"key\",\"name\":\"placeName\"},\"ORGANIZATION\":{\"defaults\":{\"resp\":\"NERVE\"},\"linkAttribute\":\"ref\",\"idAttribute\":\"xml:id\",\"lemmaAttribute\":\"key\",\"name\":\"orgName\"},\"PERSON\":{\"defaults\":{\"resp\":\"NERVE\"},\"linkAttribute\":\"ref\",\"idAttribute\":\"xml:id\",\"lemmaAttribute\":\"key\",\"name\":\"persName\"},\"TITLE\":{\"defaults\":{\"resp\":\"NERVE\"},\"linkAttribute\":\"ref\",\"idAttribute\":\"xml:id\",\"lemmaAttribute\":\"key\",\"name\":\"title\"}}}",
    "schemaURL":"https://cwrc.ca/schemas/cwrc_tei_lite.rng"
}
